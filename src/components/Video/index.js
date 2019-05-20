import React from "react";

import { connect } from "react-redux";

function Video({ activeLesson, activeModule }) {
  return (
    <div>
      <strong>Módulo {activeModule.title}</strong>
      <p>Aula {activeLesson.title}</p>
    </div>
  );
}

export default connect(state => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule
}))(Video);
