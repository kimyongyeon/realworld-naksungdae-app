/**
 * 회원정보 엔티티
 */
export class Member {
  private _userName = '';
  private _age = 0;
  private _gender = '';

  private constructor(name: string, age: number, gender: string) {
    this.userName = name;
    this.age = age;
    this.gender = gender;
  }

  static createMember(name: string, age: number, gender: string): Member {
    return new Member(name, age, gender);
  }

  set userName(nm: string) {
    this._userName = nm;
  }

  get userName() {
    return this._userName;
  }

  set age($age: number) {
    if ($age <= 20) {
      throw new Error('20이하는 가입할 수 있습니다.');
    }
    this._age = $age;
  }

  get age() {
    return this._age;
  }

  set gender($gender: string) {
    this._gender = $gender;
  }

  get gender() {
    return this._gender;
  }
}
