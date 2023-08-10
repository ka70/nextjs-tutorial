import Link from 'next/link';
import UserList from './UserList';


const Page = async () => {
    return (
        <main>
            <div className="m-4">
                <h1 className="text-lg font-bold">ユーザ一覧</h1>
                <UserList />
            </div>
            <div className="flex flex-col items-center">
                <Link href="/about" className="underline text-2xl">
                    About
                </Link>
            </div>
        </main>
    );
};

export default Page;
