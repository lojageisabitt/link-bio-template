"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { Card } from "./ui/card"
import { useForm, SubmitHandler } from 'react-hook-form';

export default function Form() {
  const [signInCredentialsError, setSignInCredentialsError] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>()

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/dashboard",
    })

    console.debug(result)

    setSignInCredentialsError(!!result?.error)
  }

  return (
    <Card className="flex justify-center p-20 border-0">
      {signInCredentialsError &&
        <div id="validationModal" className="fixed inset-0 h-screen w-screen flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-md">
                <span className="block text-right text-gray-500 cursor-pointer">X</span>
                <p className="text-red-500">O campo de nome deve ser preenchido!</p>
            </div>
        </div>}
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="email" {...register("email", { required: true })} />
        <input type="password" placeholder="password" {...register("password", { required: true })} />
        <input className="bg-popover hover:bg-secondary font-bold py-2 px-4 rounded"  type="submit" value="Login" />
      </form>
    </Card>
  )
}