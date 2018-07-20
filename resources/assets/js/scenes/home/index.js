import React, { Component } from 'react';
import {Container} from './styles';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <Container>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat, velit ac vestibulum facilisis, elit ex condimentum augue,
        in lacinia purus lacus eget purus. Ut pulvinar ante odio, non vestibulum purus mattis et. Phasellus sed purus eu dui eleifend dictum.
        Phasellus ipsum velit, euismod non ornare eu, suscipit ac eros. Cras eget sem tempor, aliquet arcu vel, congue massa.
        Curabitur tempor, neque eget condimentum semper, sapien enim congue arcu, non tincidunt nulla urna eget magna.
        Quisque vitae consequat ante. Mauris dictum lacus lacinia, pellentesque libero quis, lacinia metus. Duis sapien nunc, fringilla ac tincidunt in,
        mollis ut neque. Nunc quis nulla condimentum, tristique neque ut, dictum urna. In urna ligula, imperdiet non luctus id, rhoncus et massa.
        Proin mattis neque sit amet mi maximus, sed aliquet mi aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
        ac turpis egestas. Donec eu tellus rutrum, blandit odio at, venenatis nisi.
      </Container>
    );
  }
}
