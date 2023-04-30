from flask.sessions import SessionMixin

from api_types import BusinessArea


def get_business_areas(session: SessionMixin, title: str) -> BusinessArea:
    """Returns a reference to the business area with the given title."""
    session_data = session.setdefault("session_data", {})
    try:
        business_area = [
            ba for ba in session_data["business_areas"] if ba["title"] == title
        ][0]
    except Exception:
        business_area = {"title": title}
        session["session_data"].setdefault("business_areas", []).append(business_area)
    return business_area
