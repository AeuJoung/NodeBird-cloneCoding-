export default async function HomeLayout({children}) : Promise<Element> {
    return (
        <div>
            에프터 로그인 레이아웃
            {children}
        </div>
    );
}