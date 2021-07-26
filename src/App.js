import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : 'JSLEE',
  'birthday' : '760519',
  'gender' : '남자',
  'job' : '학생'
  },
  {
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '이순신',
  'birthday' : '880723',
  'gender' : '남자',
  'job' : '군인'
  },
  {
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '홍길동',
  'birthday' : '950204',
  'gender' : '여자',
  'job' : '회사원'
  }
]

function App() {
  return (
    /* 
    //반복문을 사용해서 내용을 줄인다. map 사용
    <div>
      <Customer
        id = {customers[0].id}
        image = {customers[0].image}
        name = {customers[0].name}
        birthday = {customers[0].birthday}
        gender = {customers[0].gender}
        job = {customers[0].job}
      />
      <Customer
        id = {customers[1].id}
        image = {customers[1].image}
        name = {customers[1].name}
        birthday = {customers[1].birthday}
        gender = {customers[1].gender}
        job = {customers[1].job}
      />
      <Customer
        id = {customers[2].id}
        image = {customers[2].image}
        name = {customers[2].name}
        birthday = {customers[2].birthday}
        gender = {customers[2].gender}
        job = {customers[2].job}
      />
    </div>
    */ 

    //map를 사용할 경우 만든시 key를 설정해야 한다.
    <div>
      {customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)})}
    </div>
  );
}  

export default App;
