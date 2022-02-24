import { useState, useEffect, useContext } from 'react';
import { Section, Title, Greeting, Keywords, List } from './styledSavedHero';
import { UserContext } from '../../contexts/UserContext';

export default function SavedHero({ savedArticles, keywordCounter }) {
  const [subtitle, setSubtitle] = useState('');
  const currentUser = useContext(UserContext);

  // reset the subtitle display
  useEffect(() => {
    updateSubtitle();
  }, [keywordCounter, savedArticles]);

  // Update subtitle depending on the amount keywords saved
  function updateSubtitle() {
    let message = '';
    let keywords = Object.keys(keywordCounter);
    if (keywords.length > 3) {
      message = `${keywords.slice(0, 2).join(', ')}, and ${keywords.length - 2} more.`;
    } else if (keywords.length === 3) {
      message = `${keywords[0]}, ${keywords[1]}, and ${keywords[2]}`;
    } else if (keywords.length === 2) {
      message = `${keywords[0]} and ${keywords[1]}`;
    } else if (keywords.length === 1) {
      message = `${keywords[0]}`;
    } else {
      message = '...';
    }
    setSubtitle(`${message.charAt(0).toUpperCase()}${message.slice(1)}`);
  }

  return (
    <Section>
      <Title>Saved Articles</Title>
      <Greeting>
        {currentUser.name}, you have {savedArticles.length} saved articles
      </Greeting>
      <Keywords>
        By keywords: <List>{subtitle}</List>
      </Keywords>
    </Section>
  );
}