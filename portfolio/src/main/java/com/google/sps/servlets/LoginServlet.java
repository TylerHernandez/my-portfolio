// // Copyright 2019 Google LLC
// //
// // Licensed under the Apache License, Version 2.0 (the "License");
// // you may not use this file except in compliance with the License.
// // You may obtain a copy of the License at
// //
// //     https://www.apache.org/licenses/LICENSE-2.0
// //
// // Unless required by applicable law or agreed to in writing, software
// // distributed under the License is distributed on an "AS IS" BASIS,
// // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// // See the License for the specific language governing permissions and
// // limitations under the License.

package com.google.sps.servlets;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/logmein")
public class LoginServlet extends HttpServlet {

     @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");

        UserService userService = UserServiceFactory.getUserService();
        if (!userService.isUserLoggedIn()){
            System.out.println("if user is NOT logged in, this should log them in");
            String urlToRedirectToAfterUserLogsIn = "/";
            String loginUrl = userService.createLoginURL(urlToRedirectToAfterUserLogsIn);
            response.sendRedirect(loginUrl); //this is not redirecting user to a new login page
            doPost(request, response);
            } else { 
                System.out.println("user was already logged in");
            }
        //}
    }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
      System.out.println("post login servlet (logout button)");
      UserService userService = UserServiceFactory.getUserService();
      if (userService.isUserLoggedIn()) {
            String userEmail = userService.getCurrentUser().getEmail();
            String urlToRedirectToAfterUserLogsOut = "/";
            String logoutUrl = userService.createLogoutURL(urlToRedirectToAfterUserLogsOut);
            response.sendRedirect(logoutUrl);
  }
  }
  
}
