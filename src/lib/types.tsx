export type Foto = {
    id: string;
    url: string;
    width?:number;
    height?:number;
}

export type Post = {
    id: number;
    image: {url:string;}
    text: string;
    title:string;
};

export type PersonalProject = {
    id:string;
    name:string;
    desc:string;
    thumbnail: Foto;
    personalPosts?: Post[];
    url: string;
}