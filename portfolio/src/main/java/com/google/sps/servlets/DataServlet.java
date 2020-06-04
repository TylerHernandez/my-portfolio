// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/text")
public class DataServlet extends HttpServlet {
    public ArrayList<String> list = new ArrayList<String>();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("application/json;");
    String json = nconvertToJson(list);
    response.getWriter().println(json);
  }
  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Get the input from the form.
    String text = getParameter(request, "text-input", "");
    // Respond with the result.
    response.setContentType("text/html;");
    response.getWriter().println(text);
    list.add(text);
    response.sendRedirect("/index.html");
    //System.out.println(text);
  }
  private String getParameter(HttpServletRequest request, String name, String defaultValue) {
    String value = request.getParameter(name);
    if (value == null) {
      return defaultValue;
    }
    return value;
  }
// use this if more than one element in list
  private String nconvertToJson(ArrayList<String> list) {
      //if only one element in list
      if (list.size()==1) {
        String json = "{";
        json += "\"message1\": ";
        json += "\"" + list.get(0) + "\"";
        json += "}";
        return json;
      }

      String json = "{";
      for (int i=0; i<list.size()-1; i++)
      {
          json+="\"message" + Integer.toString(i+1) + "\": ";
          json+= "\"" + list.get(i) + "\"";
          json+= ", ";
      }
      json+="\"message" + Integer.toString(list.size()) + "\": ";
      json += "\"" + list.get(list.size()-1) + "\"";
      json += "}";
  
  return json;
  }
}
