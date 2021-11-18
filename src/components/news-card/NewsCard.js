import React from 'react';
import MainCardTop from '../main-card-top/MainCardTop';
import {
  Card,
  CardLink,
  Image,
  TextInfo,
  PublishDate,
  Title,
  Text,
  Source,
} from '../shared/styledCard';
import notFound from '../../images/placeholder-logo.png';
import { convertDate } from '../../utils/functions';

export default function NewsCard({ children, article, loggedIn, keyword, switchModals }) {
  const { title, description, shortText, publishedAt, source, url, urlToImage } = article;
  const [date, setDate] = React.useState('');
  const [adjustedTitle, setAdjustedTitle] = React.useState('');
  const [adjustedDescription, setAdjustedDescription] = React.useState('');

  React.useEffect(() => {
    const newDate = convertDate(publishedAt);
    setDate(newDate);
    const titleArray = title ? title.split(' ') : ['Title', 'not', 'available'];
    setAdjustedTitle(
      titleArray.length > 6 ? `${titleArray.slice(0, 12).join(' ')}...` : `${titleArray.join(' ')}`
    );
    const descriptionArray = description ? description.split(' ') : ['Content', 'not', 'available'];
    setAdjustedDescription(
      descriptionArray.length > 30
        ? `${descriptionArray.slice(0, 40).join(' ')}...`
        : `${descriptionArray.join(' ')}`
    );
  }, []);
  return (
    <Card>
      <Image image={urlToImage || notFound}>
        <MainCardTop
          loggedIn={loggedIn}
          keyword={keyword}
          article={article}
          switchModals={switchModals}
        />
      </Image>
      <CardLink href={url} rel="noreferrer" target="_blank">
        <TextInfo>
          <PublishDate>{date}</PublishDate>
          <Title>{adjustedTitle}</Title>
          <Text>{adjustedDescription}</Text>
          <Source>{source.name}</Source>
        </TextInfo>
      </CardLink>
    </Card>
  );
}
