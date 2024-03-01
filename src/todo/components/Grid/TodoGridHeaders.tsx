interface TodoGridHeaderProps {
    headers: string[]
}

const TodoGridHeaders = ({headers}: TodoGridHeaderProps) => {
    return (
        <thead>
        <tr>
            {headers.map((h, i) => <th key={i} scope='col'>{h}</th>)}
        </tr>
        </thead>
    );
};

export default TodoGridHeaders;