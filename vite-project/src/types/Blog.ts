import { ReactNode } from "react"

interface Blog {
    title: string;
    body: ReactNode;
    author: string;
    id: number;
}
export default Blog