import Title from "../components/title/title";
import Answer from "../components/answer/answer";
import Question from "../components/question/question";
import BlobsTabou from "../components/svg/blobs-tabou";
import BlobsListen from "../components/svg/blobs-listen";
import BlobsConfess from "../components/svg/blobs-confess";

const Confess = () => {
  return (
    <>
      <Title content="se confier pour les bddi" color={"#F09065"}/>
      <Answer result={true}>
        Les BDDI ont globalement des difficultés à se confier… Les capacités d’écoute de leurs interlocuteurs ne sont
        toutefois généralement pas à remettre en cause.
      </Answer>
      <Question content="arrives-tu à te confier facilement ?"/>
      <BlobsConfess/>
      <Question content="te sens-tu écouté·e et soutenu·e quand tu te confies ?"/>
      <BlobsListen/>
      <Question content="Te sens-tu libre d’aborder le sujet de la santé mentale auprès de tes proches ?"/>
      <BlobsTabou/>
    </>
  )
}

export default Confess