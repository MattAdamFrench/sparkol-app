import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';

export default async function HomePage() {

    const session = await getServerSession();

    return (
        <div className="container">
            <h1>Hello {session?.user?.name ?? ""}</h1>
        </div>
    )
}