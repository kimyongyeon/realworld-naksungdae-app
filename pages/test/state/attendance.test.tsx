import Student from '@src/pages/test/state/component/Student';
import { useReducer, useState } from 'react';

const initialState: StudentsType = {
  count: 0,
  students: [
    {
      id: Date.now(),
      name: 'James',
      isHere: false,
    },
  ],
};

export type StudentType = {
  id: number;
  name: string;
  isHere: boolean;
};

type StudentsType = {
  count: number;
  students: StudentType[];
};

type ActionType = {
  type: string;
  payload: StudentType;
};

const reducer = (state: StudentsType, action: ActionType) => {
  switch (action.type) {
    case 'add-student':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    default:
      return {
        count: state.count,
        students: [action.payload],
      };
  }
};

const Attendance = () => {
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>출석부</h1>
      <p>총 학생 수: {studentsInfo?.students.length}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={(e) =>
          dispatch({ type: 'add-student', payload: { name, id: Date.now(), isHere: true } })
        }
      >
        추가
      </button>
      {studentsInfo?.students.map((s: StudentType) => (
        <Student key={s.id} name={s.name} />
      ))}
    </>
  );
};
export default Attendance;
