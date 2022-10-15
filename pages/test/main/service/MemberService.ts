import { Member } from '@src/pages/test/main/domain/Member';
import { IMemberService } from '@src/pages/test/main/service/IMemberService';
import { save } from '@src/pages/test/main/store/MemberStore';
import Axios from 'axios';
import { useDispatch } from 'react-redux';

/**
 * 회원서비스 : 도메인 규칙을 다루는 서비스
 */
export class MemberService implements IMemberService {
  private dispatch = useDispatch();

  public isAdult(age: number) {
    if (age > 19) {
      return '성인은 19세 입니다.';
    } else {
      return '아동';
    }
  }

  public saveMember(member: Member) {
    this.dispatch(save({ name: member.userName, age: member.age, gender: member.gender }));
  }

  public updateMember(member: Member): void {
    console.log('update');
  }

  public requestTestJson(): Promise<Member> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          // new Class 생성을 private으로 만들어 생성하지 못하게 막는다.
          // const member = new Member();
          // member.age = 13;
          // member.gender = '남';
          // member.userName = '홍길동';
          resolve(Member.createMember('마마무', 18, '남'));
        }, 100);
      } catch (e) {
        reject(e);
      }
    });
  }

  public requestRealMainJson(): Promise<Member> {
    // 1. ajax를 호출한다.
    // 2. 전역변수로 관리할려면 여기서 store action 이나 state 데이터를 저장한다.
    // 3. 받은 값에 대해서 Promise를 리턴한다.
    return Axios.get('api/console.log');
  }
}
