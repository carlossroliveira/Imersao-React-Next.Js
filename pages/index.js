import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget'
import GitHubCorner from '../src/components/GitHubCorner'
import Footer from '../src/components/Footer'
import QuizBackground from '../src/components/QuizBackground'

import QuizLogo from '../src/components/QuizLogo'
import Input from '../src/components/Input'
import Button from '../src/components/Button'
import QuizContainer from '../src/components/QuizContainer'


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState("");

  return ( 
    
    <QuizBackground backgroundImage={db.bg}>

    <Head>
      <title>React love</title>
    </Head>

      <QuizContainer>
      <QuizLogo/>
      <Widget>
      <Widget.Header>
          <h1>Game of Thrones</h1>
      </Widget.Header>
        <Widget.Content>
        <form
              onSubmit={function (e) {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <Input 
                name="NomeDoUsuario"
                onChange={(e) => setName(e.target.value)}
                placeholder="Diz ai seu nome"
                value="name"
              />

              <Button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </Button>
            </form>
        </Widget.Content>
        
      </Widget>

      <Widget>
          <Widget.Content>
           <h1>Meu Quiz</h1>
            <p>Vamos de Game of Thrones ...</p>
          </Widget.Content>
        </Widget>
      
      <Footer/>

      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/carlossroliveira" />
    </QuizBackground>
  )
}
 
