export default function Layout({ children }) {
    return (
        <>
            <div className='min-h-screen bg-[#1E1E1E] flex justify-center'>
                <div className='w-full'>{children}</div>
            </div>
        </>
    );
}
