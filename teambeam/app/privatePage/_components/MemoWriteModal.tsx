"use client";

import { useCallback, useState } from "react";
import "./MemoWriteModal.scss";
import { postMemo } from "@/app/_api/memo";
import { useRouter } from "next/navigation";

type FormType = {
  title: string;
  content: string;
};

export default function MemoWriteModal({
  onCloseModal,
}: {
  onCloseModal: () => void;
}) {
  const [form, setForm] = useState<FormType>({
    title: "",
    content: "",
  });

  const router = useRouter();

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
    // "use server";

    console.log("title : ", form.title);
    console.log("content : ", form.content);

    try {
      const res = await postMemo("/my/memo/", form);
      console.log("res : ", res);

      alert("메모 생성이 완료되었습니다.");
      router.refresh();
    } catch (err) {
      console.log("err  : ", err);
    }
  }, [form, router]);

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
