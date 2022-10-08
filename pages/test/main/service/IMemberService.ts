import { Member } from '@src/pages/test/main/domain/Member';

export interface IMemberService {
  isAdult(age: number): string;
  requestTestJson(): Promise<Member>;
  requestRealMainJson(): Promise<Member>;

  saveMember(member: Member): void;
  updateMember(member: Member): void;
}
