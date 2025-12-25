// 읽어온 게시글 데이터 타입 정의
interface Post {
    id: number;
    title: string;
    category: string;
    author: string;
    username: string;
    thumbnail: string;
    desc: string;
    regdate: Date;
}

export type { Post };
