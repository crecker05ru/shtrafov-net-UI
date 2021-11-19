import type { NextPage } from 'next'
import { FindForm } from '../components/findForm';
import { Footer } from '../components/footer';


import styles from '../styles/Home.module.css'
import { Header } from './../components/header';

const Home: NextPage = () => {
  return (
    <div >
      <Header />
      <FindForm />
      <Footer />
    </div>
  )
}

export default Home
