// interface : 회원가입 Request Body Dto //
export default interface SignUpRequestDto {
    name: string;
    userId: string;
    password: string;
    telNumber: string;
    authNumber: string;
    joinPath: string;
    // 필수가 아닌 값이라서 ? 찍는것 (안넣어도 된다는 뜻)
    snsId?: string;  
}