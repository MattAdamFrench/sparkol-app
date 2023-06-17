import { getServerSession } from 'next-auth';
import SignInButton from '@/components/SignInButton';
import SignOutButton from '@/components/SignOutButton';

/* Application Home, should display a personalised message or ask the user to sign in */
export default async function HomePage() {

    const session = await getServerSession();

    const message = session?.user ? `Welcome ${session.user.name}!` : "Please sign in!";

    return (
        <div className="container mx-auto pt-5">
            <h1 className="text-center text-3xl font-bold">{message}</h1>
            <br/>
            <div className="flex flex-row justify-center">
                {session?.user ? 
                    <SignOutButton/>
                        :
                    <SignInButton/>
                } 
            </div>
        </div>
    )
}