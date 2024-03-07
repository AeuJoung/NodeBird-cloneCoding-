//서버 컴포넌트는 클라이언트 컴포넌트를 임포트해도 되지만, 그 반대는 안됨.
//클라이언트 커포넌트가 서버 컴포넌트를 임포트하면 서버 컴포넌트가 클라이언트 컴포넌트로 바뀜.

//현재 얘는 서버 컴포넌트.
import LoginModal from "@/app/(beforeLogin)/_component/LoginModal";

export default function Page() {
  return (
    <LoginModal />
  )
}