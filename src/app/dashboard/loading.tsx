import { ImSpinner9 } from "react-icons/im";
export default function Loading(){
    return(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin">
                    <ImSpinner9 className="size-10" />
                </div>
            </div>
        </div>
    )
}