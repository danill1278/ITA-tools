import React from 'react';
import { 
  ProfileSummaryContainer,
  ProfileTitleContainer,
  ProfileSummaryItem,
  ProfileSummaryInnerItem,
  ProfileEditContainer,
  ProfileEditForm
} from '../ProfilePageStyles';
import { Form } from 'react-final-form';
import { composeValidators } from '../../../../../components/App/Auth/validation';
import InputValidate from '../../../../../HOC/AuthHOC/InputValidateHOC';
import { Button } from '@material-ui/core';
import ProfileInfoInterface from './ProfileInfoInterface';
import { connect } from 'react-redux';

interface Props {
  profileData: ProfileInfoInterface,
  windowStatus: boolean
}

const ProfileInfo: React.FC<Props> = (props) => {
  const { 
    profileData, 
    windowStatus } = props;

  const profileInfo = (
    <div>
      <ProfileSummaryItem>
        <span>1. Name:</span>
        <ProfileSummaryInnerItem>
        { profileData.name }
        </ProfileSummaryInnerItem>
      </ProfileSummaryItem>

      <ProfileSummaryItem>
        <span>2. Group:</span>
        <ProfileSummaryInnerItem>
        { profileData.group }
        </ProfileSummaryInnerItem>
      </ProfileSummaryItem>

      <ProfileSummaryItem>
        <span>3. Finished tasks:</span>
        <ProfileSummaryInnerItem>
        { profileData.tasks.resolvedTasks }
        </ProfileSummaryInnerItem>
      </ProfileSummaryItem>

      <ProfileSummaryItem>
        <span>4. Failed tasks:</span>
        <ProfileSummaryInnerItem>
          { profileData.tasks.failedTasks }
        </ProfileSummaryInnerItem>
      </ProfileSummaryItem>
    </div>
  );

  const profileEdit = (
    <ProfileEditContainer>
      <Form
      onSubmit={() => {
        // Handler in progress
      }}
      render={({ handleSubmit }: any) => (
        <ProfileEditForm
          onSubmit={(e: any) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <InputValidate
            id="Name"
            label="Name"
            variant="outlined"
            validate={composeValidators()}
            type="text"
            fieldName="name"
          />
          <InputValidate
            id="Group"
            label="Group"
            variant="outlined"
            validate={composeValidators()}
            type="text"
            fieldName="group"
          />
          <Button variant="contained" color="primary" type="submit">
            UPDATE PROFILE
          </Button>
        </ProfileEditForm>
      )}
    />
    </ProfileEditContainer> 
  );

  return (
    <ProfileSummaryContainer>
      <ProfileTitleContainer>
        { windowStatus ? 'Profile Summary' : 'Edit profile' }
      </ProfileTitleContainer>
      { windowStatus ? profileInfo : profileEdit }
    </ProfileSummaryContainer>
  )
}

const mapStateToProps = (state: any) => ({
  windowStatus: state.profileReducer.windowStatus
})

export default connect(mapStateToProps)(ProfileInfo);