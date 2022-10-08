import { StudentType } from '@src/pages/test/state/attendance.test';

const Student = ({ name }: Partial<StudentType>) => {
  return (
    <>
      <div>
        <span>{name}</span>
        <button>삭제</button>
      </div>
    </>
  );
};

export default Student;
