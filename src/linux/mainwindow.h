#ifndef APPJS_MAIN_WINDOW_H
#define APPJS_MAIN_WINDOW_H
#pragma once

#include <node.h>
#include "include/cef_browser.h"
#include "includes/util.h"

namespace appjs {

class MainWindow {

public:
  MainWindow(char*,Settings*);
  ~MainWindow();

  void OpenDevTools();
  void CloseDevTools();
  void show();
  void hide();
  void destroy();
  void SetMaximize(bool is_maximize);
  void SetMinimize(bool is_minimize);

  static int ScreenWidth();
  static int ScreenHeight();

private:
  CefWindowHandle window;
};

} /* appjs */
#endif /* end of APPJS_MAIN_WINDOW_H */
