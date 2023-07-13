import { Map, fromJS } from "immutable";

import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotificationsByType,
} from "./notificationSelector";

import notificationReducer, {
  initialNotificationState,
} from "../reducers/notificationReducer";

import notificationsNormalizer from "../schema/notifications";

describe("Selectors tests", function () {
  it("test that filterTypeSelected works as expected", function () {
    const state = notificationReducer(undefined, {});

    const selected = filterTypeSelected(state);

    expect(selected).toEqual(initialNotificationState.filter);
  });

  it("test that getNotifications returns a list of the message entities within the reducer", function () {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    initialState.notifications = notificationsNormalizer(
      initialState.notifications
    ).notifications;

    const state = notificationReducer(fromJS(initialState), {});

    const selected = getNotifications(state);

    expect(state instanceof Map).toEqual(true);
    expect(selected.toJS()).toEqual(
      notificationsNormalizer(initialState.notifications).notifications
    );
  });
  it("test that getUnreadNotificationsByType return a list of the message entities within the reducer", function () {
    const state = {
      notifications: fromJS({
        filter: "DEFAULT",
        messages: {
          1: {
            guid: 1,
            type: "default",
            value: "New course available",
            isRead: true,
          },
          2: {
            guid: 2,
            type: "urgent",
            value: "New resume available",
            isRead: false,
          },
          3: {
            guid: 3,
            type: "urgent",
            html: { __html: "xxx" },
            isRead: true,
          },
        },
      }),
    };

    const expectedResult = [
      {
        guid: 2,
        type: "urgent",
        value: "New resume available",
        isRead: false,
      },
    ];

    const selected = getUnreadNotificationsByType(state);

    expect(selected.toJS()).toEqual(expectedResult);
  });

  it("verify that the selector returns unread urgent notifications when the filter is set", function () {
    const state = {
      notifications: fromJS({
        filter: "URGENT",
        messages: {
          1: {
            guid: 1,
            type: "urgent",
            value: "New course available",
            isRead: false,
          },
          2: {
            guid: 2,
            type: "urgent",
            value: "New resume available",
            isRead: true,
          },
          3: {
            guid: 3,
            type: "default",
            html: { __html: "xxx" },
            isRead: false,
          },
        },
      }),
    };

    const expectedResult = [
      {
        guid: 1,
        type: "urgent",
        value: "New course available",
        isRead: false,
      },
    ];

    const selected = getUnreadNotificationsByType(state);

    expect(selected.toJS()).toEqual(expectedResult);
  });
});import { Map, fromJS } from "immutable";

import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotificationsByType,
} from "./notificationSelector";

import notificationReducer, {
  initialNotificationState,
} from "../reducers/notificationReducer";

import notificationsNormalizer from "../schema/notifications";

describe("Selectors tests", function () {
  it("test that filterTypeSelected works as expected", function () {
    const state = notificationReducer(undefined, {});

    const selected = filterTypeSelected(state);

    expect(selected).toEqual(initialNotificationState.filter);
  });

  it("test that getNotifications returns a list of the message entities within the reducer", function () {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    initialState.notifications = notificationsNormalizer(
      initialState.notifications
    ).notifications;

    const state = notificationReducer(fromJS(initialState), {});

    const selected = getNotifications(state);

    expect(state instanceof Map).toEqual(true);
    expect(selected.toJS()).toEqual(
      notificationsNormalizer(initialState.notifications).notifications
    );
  });
  it("test that getUnreadNotificationsByType return a list of the message entities within the reducer", function () {
    const state = {
      notifications: fromJS({
        filter: "DEFAULT",
        messages: {
          1: {
            guid: 1,
            type: "default",
            value: "New course available",
            isRead: true,
          },
          2: {
            guid: 2,
            type: "urgent",
            value: "New resume available",
            isRead: false,
          },
          3: {
            guid: 3,
            type: "urgent",
            html: { __html: "xxx" },
            isRead: true,
          },
        },
      }),
    };

    const expectedResult = [
      {
        guid: 2,
        type: "urgent",
        value: "New resume available",
        isRead: false,
      },
    ];

    const selected = getUnreadNotificationsByType(state);

    expect(selected.toJS()).toEqual(expectedResult);
  });

  it("verify that the selector returns unread urgent notifications when the filter is set", function () {
    const state = {
      notifications: fromJS({
        filter: "URGENT",
        messages: {
          1: {
            guid: 1,
            type: "urgent",
            value: "New course available",
            isRead: false,
          },
          2: {
            guid: 2,
            type: "urgent",
            value: "New resume available",
            isRead: true,
          },
          3: {
            guid: 3,
            type: "default",
            html: { __html: "xxx" },
            isRead: false,
          },
        },
      }),
    };

    const expectedResult = [
      {
        guid: 1,
        type: "urgent",
        value: "New course available",
        isRead: false,
      },
    ];

    const selected = getUnreadNotificationsByType(state);

    expect(selected.toJS()).toEqual(expectedResult);
  });
});import { Map, fromJS } from "immutable";

import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotificationsByType,
} from "./notificationSelector";

import notificationReducer, {
  initialNotificationState,
} from "../reducers/notificationReducer";

import notificationsNormalizer from "../schema/notifications";

describe("Selectors tests", function () {
  it("test that filterTypeSelected works as expected", function () {
    const state = notificationReducer(undefined, {});

    const selected = filterTypeSelected(state);

    expect(selected).toEqual(initialNotificationState.filter);
  });

  it("test that getNotifications returns a list of the message entities within the reducer", function () {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    initialState.notifications = notificationsNormalizer(
      initialState.notifications
    ).notifications;

    const state = notificationReducer(fromJS(initialState), {});

    const selected = getNotifications(state);

    expect(state instanceof Map).toEqual(true);
    expect(selected.toJS()).toEqual(
      notificationsNormalizer(initialState.notifications).notifications
    );
  });
  it("test that getUnreadNotificationsByType return a list of the message entities within the reducer", function () {
    const state = {
      notifications: fromJS({
        filter: "DEFAULT",
        messages: {
          1: {
            guid: 1,
            type: "default",
            value: "New course available",
            isRead: true,
          },
          2: {
            guid: 2,
            type: "urgent",
            value: "New resume available",
            isRead: false,
          },
          3: {
            guid: 3,
            type: "urgent",
            html: { __html: "xxx" },
            isRead: true,
          },
        },
      }),
    };

    const expectedResult = [
      {
        guid: 2,
        type: "urgent",
        value: "New resume available",
        isRead: false,
      },
    ];

    const selected = getUnreadNotificationsByType(state);

    expect(selected.toJS()).toEqual(expectedResult);
  });

  it("verify that the selector returns unread urgent notifications when the filter is set", function () {
    const state = {
      notifications: fromJS({
        filter: "URGENT",
        messages: {
          1: {
            guid: 1,
            type: "urgent",
            value: "New course available",
            isRead: false,
          },
          2: {
            guid: 2,
            type: "urgent",
            value: "New resume available",
            isRead: true,
          },
          3: {
            guid: 3,
            type: "default",
            html: { __html: "xxx" },
            isRead: false,
          },
        },
      }),
    };

    const expectedResult = [
      {
        guid: 1,
        type: "urgent",
        value: "New course available",
        isRead: false,
      },
    ];

    const selected = getUnreadNotificationsByType(state);

    expect(selected.toJS()).toEqual(expectedResult);
  });
});import { Map, fromJS } from "immutable";

import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotificationsByType,
} from "./notificationSelector";

import notificationReducer, {
  initialNotificationState,
} from "../reducers/notificationReducer";

import notificationsNormalizer from "../schema/notifications";

describe("Selectors tests", function () {
  it("test that filterTypeSelected works as expected", function () {
    const state = notificationReducer(undefined, {});

    const selected = filterTypeSelected(state);

    expect(selected).toEqual(initialNotificationState.filter);
  });

  it("test that getNotifications returns a list of the message entities within the reducer", function () {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    initialState.notifications = notificationsNormalizer(
      initialState.notifications
    ).notifications;

    const state = notificationReducer(fromJS(initialState), {});

    const selected = getNotifications(state);

    expect(state instanceof Map).toEqual(true);
    expect(selected.toJS()).toEqual(
      notificationsNormalizer(initialState.notifications).notifications
    );
  });
  it("test that getUnreadNotificationsByType return a list of the message entities within the reducer", function () {
    const state = {
      notifications: fromJS({
        filter: "DEFAULT",
        messages: {
          1: {
            guid: 1,
            type: "default",
            value: "New course available",
            isRead: true,
          },
          2: {
            guid: 2,
            type: "urgent",
            value: "New resume available",
            isRead: false,
          },
          3: {
            guid: 3,
            type: "urgent",
            html: { __html: "xxx" },
            isRead: true,
          },
        },
      }),
    };

    const expectedResult = [
      {
        guid: 2,
        type: "urgent",
        value: "New resume available",
        isRead: false,
      },
    ];

    const selected = getUnreadNotificationsByType(state);

    expect(selected.toJS()).toEqual(expectedResult);
  });

  it("verify that the selector returns unread urgent notifications when the filter is set", function () {
    const state = {
      notifications: fromJS({
        filter: "URGENT",
        messages: {
          1: {
            guid: 1,
            type: "urgent",
            value: "New course available",
            isRead: false,
          },
          2: {
            guid: 2,
            type: "urgent",
            value: "New resume available",
            isRead: true,
          },
          3: {
            guid: 3,
            type: "default",
            html: { __html: "xxx" },
            isRead: false,
          },
        },
      }),
    };

    const expectedResult = [
      {
        guid: 1,
        type: "urgent",
        value: "New course available",
        isRead: false,
      },
    ];

    const selected = getUnreadNotificationsByType(state);

    expect(selected.toJS()).toEqual(expectedResult);
  });
});
