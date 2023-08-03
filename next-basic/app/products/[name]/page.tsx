"use client"
import { usePathname } from 'next/navigation'
// https://nextjs.org/docs/app/api-reference/functions/use-pathname
export default function Name() {
    const pathname = usePathname()

    return (
        <div>
            <h1>商品{pathname}のページです</h1>
        </div>
    )
}
