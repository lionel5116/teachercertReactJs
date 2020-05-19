const initialState = {
    teacherName: '',
    teacherSubject: '',
    isCertified: ''  ,
    gradeLevel: '' 
};

export default function redTeacher(state = initialState,action) {
    switch(action.type) {
       case 'TEACHER_DATA':
         return {
           ...state,
           teacherName:action.teacherName ,
           teacherSubject: action.teacherSubject,
           isCertified: action.isCertified,
           gradeLevel: action.gradeLevel
         };
         default:
          return state;
     }
  }