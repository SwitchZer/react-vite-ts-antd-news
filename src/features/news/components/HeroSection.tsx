import { Avatar, Carousel, Col, List, Row, Skeleton } from "antd";
import { useGetTopHeadlinesQuery } from "@/services/news";
import { TTopHeadline } from "@/types/news";

type TPropsItemImage = {
  src: string;
  title: string;
};

const ItemImage: React.FC<TPropsItemImage> = ({ src, title }) => {
  return (
    <div className="img-container">
      <h1
        style={{
          position: "absolute",
          bottom: "30px",
          left: "20px",
          width: "80%",
        }}
      >
        {title}
      </h1>
      <img className="img" src={src} />
    </div>
  );
};

const RightList = ({ data = [] }: { data: TTopHeadline[] }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        pageSize: 2,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item key={item.title}>
          <List.Item.Meta
            avatar={<Avatar src="https://i.pravatar.cc/300" />}
            title={<a>{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};

const HeroSection = () => {
  const { data, error, isLoading } = useGetTopHeadlinesQuery(null);

  const carauselData: TTopHeadline[] = data?.articles?.slice(0, 3) || [];
  const listData: TTopHeadline[] = data?.articles?.slice(3) || [];

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div
      style={{
        marginTop: "15px",
      }}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} md={14}>
          <Carousel>
            {carauselData?.map((item: TTopHeadline) => (
              <ItemImage
                src={item.urlToImage}
                title={item.title}
                key={item.title}
              />
            ))}
          </Carousel>
        </Col>
        <Col xs={24} md={10}>
          <RightList data={listData} />
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
