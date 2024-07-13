import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Message({ message, type }: MessageProps){
    if (!message){
        return <></>
    }
    return(
    <Alert className={'destructive'}>
        <AlertTitle>Mensagen do sistema!</AlertTitle>
        <AlertDescription>
            {message}
        </AlertDescription>
    </Alert>
    )
}