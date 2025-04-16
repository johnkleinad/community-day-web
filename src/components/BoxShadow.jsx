export default function BoxShadow({ children }) {
    return <>
        <div className='h-16 md:h-[128px] w-full bg-gradient-to-t from-[#0F0F0F]/50' />
        <div className="bg-[#0F0F0F]/50">
            {children}
        </div>
        <div className='h-16 md:h-[128px] w-full bg-gradient-to-b from-[#0F0F0F]/50' />
    </>
}
