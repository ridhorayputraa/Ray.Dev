import Link from 'next/link'

const layout = ({children}) => {
    return(
        <>
            <ul>
                <li><Link href='/projects' >projects</Link></li>
                <li><Link href='/projects/detail' >projects</Link></li>
                <li><Link href='/about' >about</Link></li>
                <li><Link href='/' >home</Link></li>
            </ul>
                <main>{children}</main>
        </>
    )
}

export default layout