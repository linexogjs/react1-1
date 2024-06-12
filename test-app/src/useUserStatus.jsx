import { useState, useEffect } from "react";

export default function useUserStatus (userId) {
    const[isOnline, setIsOnLine] = useState(null);
    
    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnLine(status.isOnline)
        }

        ServerAPI.subscibeUserStatus(props.user.id, handleStatusChange)
        return () => {
            ServerAPI.unsubcribeUserStatus(props.user.id, handleStatusChange)
        }
    })
    return isOnline;
}
