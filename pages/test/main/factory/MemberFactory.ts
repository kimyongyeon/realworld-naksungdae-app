import { IMemberService } from '@src/pages/test/main/service/IMemberService';
import { MemberService } from '@src/pages/test/main/service/MemberService';
import { MemberType } from '@src/pages/test/main/store/MemberType';

export class MemberFactory {
  static createMemberService() {
    const memberService: IMemberService = new MemberService();
    // const memberService: IMemberService = new MockService();
    return memberService;
  }
}
