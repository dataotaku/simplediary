import { useState } from "react";

const DiaryEditor = () => {

  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = () => {
    console.log({author});
    console.log({content});
    alert("저장 성공");
  }

  return <div className="DiaryEditor">
    <h2>오늘의 일기</h2>
    <div>
        <input 
          name="author"
          value={author} 
          onChange={(e)=>{
            setAuthor(e.target.value);
          }} 
        />
    </div>
    <div>
        <textarea 
          value={content}
          onChange={(e)=>{
            setContent(e.target.value);
          }}
        />
    </div>
    <div>
        <span>오늘의 감정점수 : </span>
        <select>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
    </div>
    <div>
        <button onClick={handleSubmit}>일기 저장 하기</button>
    </div>
  </div>
}

export default DiaryEditor;