import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useTranslation } from 'react-i18next';
import { SectionSkills, TitleSkills } from './styles';
import SkillBox from '~/components/SkillBox';

const mailgun = require('mailgun-js');

const DOMAIN = 'sandbox67b76e446fc24f3b9e4a1296c6060a2a.mailgun.org';
const mg = mailgun({
  apiKey: 'dbc12adbc5e300bacf2b5fa40c4fd8b3-2af183ba-65688a11',
  domain: DOMAIN,
});
const data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'bar@example.com, YOU@YOUR_DOMAIN_NAME',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!',
};

const ReduxIcon =
  'https://bognarjunior.files.wordpress.com/2018/08/download.png?w=256';
const FlaskLogo =
  'https://e7.pngegg.com/pngimages/654/56/png-clipart-flask-web-framework-python-software-framework-jinja-flask-miscellaneous-monochrome-thumbnail.png';

const GraphqlIcon =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png';

const JavascriptIcon =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png';
const ReactIcon =
  'https://sap.github.io/ui5-webcomponents/assets/images/react.svg';
const PythonIcon =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png';

const HtmlIcon =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVB4twv74Kv-OlgnOCa8NuMOP2DvpeK3kQcw&usqp=CAU';

const CssIcon =
  'https://www.pngitem.com/pimgs/m/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png';

const TsIcon = 'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <SectionSkills>
      <TitleSkills>{t('skills')}</TitleSkills>
      <ScrollContainer
        onClick={() => {
          console.log('hhhhhh');
          mg.messages().send(data, (x, y) => {
            console.log({ x, y });
          });
        }}
        style={{ display: 'flex', margin: 0 }}
        horizontal>
        <SkillBox margin={5} label='React.js' icon={ReactIcon} />
        <SkillBox margin={5} label='Python' icon={PythonIcon} />
        <SkillBox margin={5} label='Typescript' icon={TsIcon} />
        <SkillBox margin={5} label='Javascript' icon={JavascriptIcon} />
        <SkillBox margin={5} label='GraphQL' icon={GraphqlIcon} />
        <SkillBox margin={5} label='Flask' icon={FlaskLogo} />
        <SkillBox margin={5} label='Redux' icon={ReduxIcon} />
        <SkillBox margin={5} label='HTML5' icon={HtmlIcon} />
        <SkillBox margin={5} label='CSS3' icon={CssIcon} />
      </ScrollContainer>
    </SectionSkills>
  );
};

export default Skills;
