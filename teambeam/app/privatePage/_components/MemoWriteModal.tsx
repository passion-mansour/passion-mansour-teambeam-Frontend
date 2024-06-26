"use client";

import { useCallback, useEffect, useState } from "react";
import "@/app/_styles/Modal.scss";
import { postMemo } from "@/app/_api/memo";
import { MemoType } from "../memo/page";

type FormType = {
  title: string;
  content: string;
};

export default function MemoWriteModal({
  onCloseModal,
  setMemoList,
}: {
  onCloseModal: () => void;
  setMemoList: React.Dispatch<React.SetStateAction<MemoType[] | null>>;
}) {
  const [form, setForm] = useState<FormType>({
    title: "",
    content: "",
  });

  const titleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, title: e.target.value });
    },
    [form]
  );

  const contentChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setForm({ ...form, content: e.target.value });
    },
    [form]
  );

  const onSubmit = useCallback(async () => {
    try {
      const res = await postMemo("/my/memo/", form);
      alert("메모 생성이 완료되었습니다.");
      onCloseModal();
      setMemoList((prev) => {
        if (prev !== null) {
          return [res.data, ...prev];
        }

        return null;
      });
    } catch (err) {
      console.log("err  : ", err);
      alert("메모 생성에 실패했습니다.");
    }
  }, [form, onCloseModal, setMemoList]);

  return (
    <div className='modal-bg'>
      <div className='modal-wrap'>
        <form action={onSubmit}>
          <div className='modal-header'>
            <h2>메모추가</h2>
          </div>

          <div className='modal-content'>
            <input
              type='text'
              value={form.title}
              onChange={titleChange}
              placeholder='제목을 입력하세요'
            />
            <textarea
              value={form.content}
              onChange={contentChange}
              placeholder='내용을 입력하세요'
            ></textarea>
          </div>

          <div className='buttons'>
            <button type='button' onClick={onCloseModal}>
              닫기
            </button>
            <button type='submit'>등록</button>
          </div>
        </form>
      </div>
    </div>
  );
}
