import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReplyDetail = () => {
  const { id } = useParams();

  const [reply, setReply] = useState({
    replyNo: "",
    replyContent: "",
    refBno: "",
    replyWriter: "",
    createDate: "",
    status: "",
  });

  const [load, isload] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost/api/replies/${id}`).then((data) => {
      console.log(data);
      const el = data.data;
      setReply({
        replyNo: el.replyNo,
        replyContent: el.replyContent,
        refBno: el.refBno,
        replyWriter: el.replyWriter,
        createDate: el.createDate,
        status: el.status,
      });
      isload(true);
    });
  }, [id]);

  if (!load) {
    return <h1>화면 준비중...</h1>;
  }

  return (
    <>
      <h1>{reply.refBno}번 게시글의</h1>
      <h1>{reply.replyNo}번 댓글</h1>
      <h3>{reply.replyWriter}님의 작성</h3>
      <h3>{reply.replyContent}</h3>
      <h3>작성날:{reply.createDate}</h3>
      <h3>{reply.status === "Y" ? "정상적인 댓글" : "삭제된 댓글"}</h3>
    </>
  );
};

export default ReplyDetail;
