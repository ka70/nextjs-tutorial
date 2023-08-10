type User = {
    id: string,
    name: string,
    email: string,
};

const getUsers = async (): Promise<User[]> => {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Failed to fetch data');
    return response.json()
}

const UserList = async () => {
    const users: User[] = await getUsers();
    console.log(users)
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};

export default UserList;
