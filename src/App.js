import Customer from './components/Customer'
import './App.css';

const customer = {
  'name' : 'JSLEE',
  'birthday' : '760519',
  'gender' : 'Man',
  'job' : 'Student'
}

function App() {
  return (
    <Customer 
      name = {customer.name}
      birthday = {customer.birthday}
      gender = {customer.gender}
      job = {customer.job}
    />
  );
}  

export default App;
