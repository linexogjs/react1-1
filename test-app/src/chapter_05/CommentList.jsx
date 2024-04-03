import Comment from "./Comment";

export default function CommentList (props) {
    return (
        <div>
            <Comment name="홍길동" comment="안녕하세요" />
            <Comment name="홍길동2" comment="안녕하세요!" />
            <Comment name="홍길동3" comment="안녕하세요!!" />
        </div>
    )
}
