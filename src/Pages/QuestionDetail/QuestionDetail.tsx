
import { CodeEditorPanel } from '@/components/CodeEditor/CodeEditorPanel'
import { useParams } from 'react-router-dom'

const QuestionDetail = () => {
    const { questionId } = useParams()
    console.log("🚀 ~ QuestionDetail ~ questionId:", questionId)
  return (
    <div>
        <CodeEditorPanel/>
        {/* <CodeEditor/> */}
    </div>
  )
}

export default QuestionDetail
