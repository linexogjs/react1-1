export default function NumberList(props) {
    // const { numbers } = props
    const numbers = [1,2,3,4,5]
    
    const todoLists = [
        {
            id:1,
            todo:"할일1"
        },
        {
            id:2,
            todo:"할일2"
        },
        {
            id:3,
            todo:"할일3"
        },
        {
            id:4,
            todo:"할일4"
        },
        {
            id:5,
            todo:"할일5"
        }
    ];

    const listItems = numbers.map((number, index) =>
        <li key={index}>{number}</li>
    )

    //id 값을 key props로 사용한 경우
    const itemlists = todoLists.map((todoList) =>
        <li key={todoList.id}>{todoList.todo}</li>
    )
    // index 값을 key props로 사용한 경우
    const foos = todoLists.map((foo, index) =>
        <li key={index}>{foo.todo}</li>
    )

    // 포맷팅된 문자열을 key props로 사용한 경우
    const bars = todoLists.map((bar) =>
    <li key={`student-id-${bar.id}`}>{bar.todo}</li>
    )


    return (
        <>
            <ul>{listItems}</ul>
            <ul>{itemlists}</ul>
            <ul>{foos}</ul>
            <ul>{bars}</ul>
        </>
    );
}
