import { useGetAllNewsQuery } from "@/services/news";
import { TTopHeadline } from "@/types/news";
import { Card, Col, Row, Skeleton } from "antd";
import React, { useState } from "react";
import ArticleModal from "./ArticleModal";

const NewsSection: React.FC = () => {
  const { data, isLoading, error } = useGetAllNewsQuery(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<TTopHeadline | null>(
    null
  );

  const allArticles: TTopHeadline[] = data?.articles || [];

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedArticle(null);
  };

  const handleOpenModal = (item: TTopHeadline) => {
    setModalOpen(true);
    setSelectedArticle(item);
  };

  if (isLoading) {
    return <Skeleton avatar paragraph={{ rows: 4 }} />;
  }

  return (
    <Row
      style={{
        marginTop: "20px",
      }}
      gutter={[16, 16]}
    >
      {allArticles?.map((item) => (
        <Col
          xs={24}
          md={12}
          lg={6}
          key={item.title}
          onClick={() => handleOpenModal(item)}
        >
          <Card hoverable cover={<img alt="example" src={item.urlToImage} />}>
            <Card.Meta title={item.title} description={item.content} />
          </Card>
        </Col>
      ))}

      {selectedArticle && (
        <ArticleModal
          open={isModalOpen}
          onCancel={handleCloseModal}
          article={selectedArticle}
        />
      )}
    </Row>
  );
};

export default NewsSection;
