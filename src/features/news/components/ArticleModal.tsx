import { TTopHeadline } from "@/types/news";
import { Card, Modal } from "antd";
import React, { ReactNode } from "react";

type TProps = {
  open: boolean;
  onCancel: () => void;
  article: TTopHeadline;
};

const ArticleModal: React.FC<TProps> = ({ open, onCancel, article }) => {
  return (
    <Modal title="Basic Modal" open={open} onCancel={onCancel} footer={<></>}>
      <Card cover={<img alt="example" src={article.urlToImage} />}>
        <Card.Meta title={article.title} description={article.description} />
      </Card>
    </Modal>
  );
};

export default ArticleModal;
