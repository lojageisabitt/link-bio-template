import Presentation from '../components/presentation'
export default async function Home() {

  return (
      <div className="flex flex-col items-center justify-center min-w-[340px] max-w-[90%] my-20 mx-auto gap-4" >
        <Presentation/>
      </div>
  );
}