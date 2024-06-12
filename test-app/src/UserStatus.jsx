import useUserStatus from "./useUserStatus";

export default function UserStatus (props) {
    const isOnline = useUserStatus(props.user.id);
    
    if (isOnline === null) {
        return '대기 중...'
    }
    return isOnline ? '온라인' : '오프라인'
}
