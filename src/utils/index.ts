import dayjs from "dayjs";

// function: YYMMDD 형태의 생년월일로 만 나이 구하기 함수  // 
export const calculateAge = (birthString: string) => {
    const yearString = birthString.substring(0, 2);
    const monthString = birthString.substring(2, 4);
    const dayString = birthString.substring(4, 6);

    const birth = dayjs(`19${yearString}-${monthString}-${dayString}`);
    // 오늘 날짜 함수 호출
    const today = dayjs();

    let age = today.year() - birth.year();
    
    // 오늘날짜 기준 생일 안지났으면 1 빼주기
    if (today.isBefore(birth.add(age, 'year'))) age--; {
        return age;

    } 

}
